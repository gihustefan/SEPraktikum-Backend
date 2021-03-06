package at.decisionexpert.service.decisionguidancemodel.designoption;

import at.decisionexpert.business.decisionguidance.designoption.DesignOptionBusiness;
import at.decisionexpert.neo4jentity.dto.decisionguidance.designoption.DesignOptionChangeRequestDto;
import at.decisionexpert.neo4jentity.dto.decisionguidance.designoption.DesignOptionDto;
import at.decisionexpert.neo4jentity.dto.decisionguidance.designoption.DesignOptionRelationDto;
import at.decisionexpert.neo4jentity.node.CoreData;
import at.decisionexpert.neo4jentity.relationship.decisionguidance.designoption.DOAttributeRelationship;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.validation.constraints.NotNull;

/**
 * Created by stefanhaselboeck on 18.08.16.
 */
@Service
public class DesignOptionServiceImpl implements DesignOptionService {

    @Autowired
    DesignOptionBusiness designOptionBusiness;

    @Override
    public DesignOptionDto getDesignOption(@NotNull Long id) {
        return designOptionBusiness.getDesignOption(id);
    }

    @Override
    public DesignOptionDto createDesignOption(DesignOptionChangeRequestDto designOption) {
        return designOptionBusiness.createDesignOption(designOption);
    }

    @Override
    public DesignOptionDto updateDesignOptionProperties(@NotNull Long id, @NotNull DesignOptionChangeRequestDto newValues) {
        return designOptionBusiness.updateDesignOptionProperties(id, newValues);
    }

    @Override
    public void deleteDesignOption(@NotNull Long id) {
        designOptionBusiness.deleteDesignOption(id);
    }

    @Override
    public <T extends DOAttributeRelationship<A>, A extends CoreData> DesignOptionRelationDto createRelation(@NotNull Long idDesignOption, DesignOptionRelationDto attributeInfo, Class<T> relationClass, Class<A> toNodeType) {
        return designOptionBusiness.createRelation(idDesignOption, attributeInfo, relationClass, toNodeType);
    }

    @Override
    public <T extends DOAttributeRelationship<A>, A extends CoreData> DesignOptionRelationDto updateExistingRelationAttribute(@NotNull Long idDesignOption, @NotNull Long idDesignOptionRelation, DesignOptionRelationDto newValues, Class<T> clazz, Class<A> toNodeType) {
        return designOptionBusiness.updateExistingRelationAttribute(idDesignOption, idDesignOptionRelation, newValues, clazz, toNodeType);
    }

    @Override
    public <T extends DOAttributeRelationship<? extends CoreData>> void deleteRelationAttribute(@NotNull Long idDesignOption, @NotNull Long idDesignOptionRelation, Class<T> relationClass) {
        designOptionBusiness.deleteRelationAttribute(idDesignOption, idDesignOptionRelation, relationClass);
    }
}
