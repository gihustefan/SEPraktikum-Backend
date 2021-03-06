package at.decisionexpert.repository.relationship.decisionguidance.designoption;

import at.decisionexpert.neo4jentity.node.CoreData;
import at.decisionexpert.neo4jentity.relationship.decisionguidance.designoption.*;
import org.neo4j.ogm.annotation.RelationshipEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.neo4j.template.Neo4jOperations;
import org.springframework.stereotype.Repository;
import org.springframework.util.Assert;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by stefanhaselboeck on 19.08.16.
 */
@Repository
public class DOAttributeRelationshipRepositoryImpl implements DOAttributeRelationshipRepository {

    @Autowired
    private Neo4jOperations neo4jOperations;

    @Override
    public <T extends DOAttributeRelationship<? extends CoreData>> T findById(Class<T> clazz, Long idDesignOptionRelation) {
        return neo4jOperations.load(clazz, idDesignOptionRelation);
    }

    @Override
    public <T extends DOAttributeRelationship<? extends CoreData>> T findByOrdering(Class<T> clazz, Long idDesignOption, Integer ordering) {
        String query = "MATCH (start:DesignOption)-[rel:" + getRelationType(clazz)
                + "]->() WHERE id(start) = {idDesignOption} and rel.ordering = {ordering} RETURN rel";

        Map<String, Object> parameters = new HashMap<>();
        parameters.put("idDesignOption", idDesignOption);
        parameters.put("ordering", ordering);

        return neo4jOperations.queryForObject(clazz, query, parameters);
    }

    @Override
    public <T extends DOAttributeRelationship<? extends CoreData>> Iterable<T> findRelationByStartNodeEndNode(Class<T> clazz, Long idStartNode, Long idEndNode) {
        StringBuilder query = new StringBuilder();
        query.append("MATCH (start:DesignOption)");
        if(clazz == HasAffectedGuidanceModels.class)
            query.append("-[rel:HAS_AFFECTEDGUIDANCEMODEL]->(end:DecisionGuidanceModel)");
        else if (clazz == HasImplication.class)
            query.append("-[rel:HAS_IMPLICATION]->(end:Implication)");
        else if (clazz == HasRequiredComponent.class)
            query.append("-[rel:HAS_REQUIREDCOMPONENT]->(end:Component)");
        else if (clazz == HasAddressedRequirement.class)
            query.append("-[rel:HAS_ADDRESSEDREQUIREMENT]->(end:Requirement)");


        query.append(" WHERE id(start) = {idStartNode} AND id(end) = {idEndNode} RETURN rel");

        Map<String, Object> parameters = new HashMap<>();
        parameters.put("idStartNode", idStartNode);
        parameters.put("idEndNode", idEndNode);

        return neo4jOperations.queryForObjects(clazz, query.toString(), parameters);
    }

    @Override
    public <T extends DOAttributeRelationship<? extends CoreData>> void delete(T relation) {
        neo4jOperations.delete(relation);
    }

    @Override
    public <T extends DOAttributeRelationship<? extends CoreData>> Iterable<T> findAllRelations(Long idDesignOption, Class<T> relationClass) {
        String query = "MATCH (start:DesignOption)-[rel:" + getRelationType(relationClass)
                + "]->() WHERE id(start) = {idDesignOption} RETURN rel";

        Map<String, Object> parameters = new HashMap<>();
        parameters.put("idDesignOption", idDesignOption);

        return neo4jOperations.queryForObjects(relationClass, query, parameters);
    }

    @Override
    public <T extends DOAttributeRelationship<? extends CoreData>> T save(T relation) {
        return neo4jOperations.save(relation);
    }

    /**
     * The Relation will be determined by the Annotation of the given class!
     * They must be annotated with RelationshipEntity -> type(). Otherwise we
     * are not able to dynamically set the Relation! Annotation fetched via
     * Reflection
     *
     * @param relationClass
     *            The relation Class under investigation
     * @return the Relation Name based on the relation class
     */
    private String getRelationType(
            Class<? extends DOAttributeRelationship<? extends CoreData>> relationClass) {
        RelationshipEntity relEntity = relationClass.getAnnotation(RelationshipEntity.class);
        Assert.notNull(relEntity);
        return relEntity.type();
    }
}
