package at.decisionexpert.neo4jentity.relationship.component;

import at.decisionexpert.neo4jentity.node.Component;
import at.decisionexpert.neo4jentity.node.Requirement;
import org.neo4j.ogm.annotation.RelationshipEntity;

/**
 * Created by stefanhaselboeck on 14.10.16.
 */
@RelationshipEntity(type = "HAS_POTENTIALREQUIREMENT")
public class ComponentHasPotentialRequirement extends ComponentAttributeRelationship<Requirement> {

    public ComponentHasPotentialRequirement(Component startNode, Requirement endNode, String description, String definition, int ordering) {
        super(startNode, endNode, description, definition, ordering);
        // TODO Auto-generated constructor stub
    }

    public ComponentHasPotentialRequirement(Component startNode, Requirement endNode) {
        super(startNode, endNode);
        // TODO Auto-generated constructor stub
    }

    public ComponentHasPotentialRequirement() {
        super();
        // TODO Auto-generated constructor stub
    }
}