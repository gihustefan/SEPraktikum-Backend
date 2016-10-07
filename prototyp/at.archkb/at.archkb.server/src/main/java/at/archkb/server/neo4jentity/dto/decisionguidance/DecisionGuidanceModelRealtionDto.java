package at.archkb.server.neo4jentity.dto.decisionguidance;

import at.archkb.server.neo4jentity.node.CoreData;
import at.archkb.server.neo4jentity.relationship.decisionguidance.DGMAttributeRelationship;
import com.fasterxml.jackson.annotation.JsonInclude;

/**
 * Created by stefanhaselboeck on 12.08.16.
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
public class DecisionGuidanceModelRealtionDto {

    private Long id;

    private String name;

    private Long idAttribute;

    private String definition;

    private String description;

    private Integer ordering;

    public DecisionGuidanceModelRealtionDto() {
        super();
    }

    public DecisionGuidanceModelRealtionDto(DGMAttributeRelationship <? extends CoreData> dgmRelationship) {
        id = dgmRelationship.getId();
        name = dgmRelationship.getEndNode().getName();
        idAttribute = dgmRelationship.getEndNode().getId();
        definition = dgmRelationship.getDefinition();
        description = dgmRelationship.getDescription();
        ordering = dgmRelationship.getOrdering();
    }

    public DecisionGuidanceModelRealtionDto(CoreData dgmAttribute) {
        name = dgmAttribute.getName();
        definition = dgmAttribute.getDefinition();
        idAttribute = dgmAttribute.getId();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getIdAttribute() {
        return idAttribute;
    }

    public void setIdAttribute(Long idAttribute) {
        this.idAttribute = idAttribute;
    }

    public String getDefinition() {
        return definition;
    }

    public void setDefinition(String definition) {
        this.definition = definition;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getOrdering() {
        return ordering;
    }

    public void setOrdering(Integer ordering) {
        this.ordering = ordering;
    }
}
