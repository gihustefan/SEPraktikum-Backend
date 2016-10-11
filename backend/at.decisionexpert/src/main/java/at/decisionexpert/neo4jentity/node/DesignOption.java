package at.decisionexpert.neo4jentity.node;

import at.decisionexpert.neo4jentity.relationship.decisionguidance.designoption.HasAddressedRequirement;
import at.decisionexpert.neo4jentity.relationship.decisionguidance.designoption.HasEffectedGuidanceModels;
import at.decisionexpert.neo4jentity.relationship.decisionguidance.designoption.HasImplication;
import at.decisionexpert.neo4jentity.relationship.decisionguidance.designoption.HasRequiredComponent;
import org.neo4j.ogm.annotation.NodeEntity;
import org.neo4j.ogm.annotation.Relationship;

import java.util.HashSet;
import java.util.Set;

/**
 * Created by stefanhaselboeck on 12.08.16.
 */
@NodeEntity
public class DesignOption extends CoreData {

    @Relationship(type = "HAS_IMPLICATION", direction = Relationship.OUTGOING)
    private Set<HasImplication> implications = new HashSet<>(0);

    @Relationship(type = "HAS_ADDRESSEDREQUIREMENT", direction = Relationship.OUTGOING)
    private Set<HasAddressedRequirement> addressedRequirements = new HashSet<>(0);

    @Relationship(type = "HAS_EFFECTEDGUIDANCEMODEL", direction = Relationship.OUTGOING)
    private Set<HasEffectedGuidanceModels> effectedGuidanceModels = new HashSet<>(0);

    @Relationship(type = "HAS_REQUIREDCOMPONENT", direction = Relationship.OUTGOING)
    private Set<HasRequiredComponent> requiredComponents = new HashSet<>(0);

    private String description;

    public DesignOption(User creator, String name, String definition) {
        super(creator, name, definition);
        // TODO Auto-generated constructor stub
    }

    public DesignOption(String name, String definition) {
        super(name, definition);
        // TODO Auto-generated constructor stub
    }

    public DesignOption () {
        super();
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Set<HasImplication> getImplications() {
        return implications;
    }

    public void setImplications(Set<HasImplication> implications) {
        this.implications = implications;
    }

    public Set<HasAddressedRequirement> getAddressedRequirements() {
        return addressedRequirements;
    }

    public void setAddressedRequirements(Set<HasAddressedRequirement> addressedRequirements) {
        this.addressedRequirements = addressedRequirements;
    }

    public Set<HasEffectedGuidanceModels> getEffectedGuidanceModels() {
        return effectedGuidanceModels;
    }

    public void setEffectedGuidanceModels(Set<HasEffectedGuidanceModels> effectedGuidanceModels) {
        this.effectedGuidanceModels = effectedGuidanceModels;
    }

    public Set<HasRequiredComponent> getRequiredComponents() {
        return requiredComponents;
    }

    public void setRequiredComponents(Set<HasRequiredComponent> requiredComponents) {
        this.requiredComponents = requiredComponents;
    }
}