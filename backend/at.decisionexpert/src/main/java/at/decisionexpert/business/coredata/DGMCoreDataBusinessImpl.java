package at.decisionexpert.business.coredata;

import at.decisionexpert.business.user.UserBusiness;
import at.decisionexpert.neo4jentity.dto.decisionguidance.DecisionGuidanceModelRealtionDto;
import at.decisionexpert.neo4jentity.dto.decisionguidance.DecisionGuidanceModelRelatedGuidanceModelsDto;
import at.decisionexpert.neo4jentity.node.CoreData;
import at.decisionexpert.neo4jentity.node.DecisionGuidanceModel;
import at.decisionexpert.repository.node.AttributeRepository;
import at.decisionexpert.repository.node.decisionguidance.DecisionGuidanceModelAttributeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.util.Assert;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by stefanhaselboeck on 18.08.16.
 */
@Component
public class DGMCoreDataBusinessImpl implements DGMCoreDataBusiness{

    @Autowired
    private UserBusiness userBusiness;

    @Autowired
    private AttributeRepository attributeRepository;

    @Autowired
    DecisionGuidanceModelAttributeRepository coreDataRepository;

    @Override
    public <T extends CoreData> List<DecisionGuidanceModelRealtionDto> getCoreData(String titlePartial, Class<T> coreDataClass) {
        Assert.notNull(titlePartial);
        Assert.notNull(coreDataClass);

        List<DecisionGuidanceModelRealtionDto> result = new ArrayList<>();

        coreDataRepository.findAllByTitle(titlePartial, coreDataClass).forEach(core -> {
            result.add(new DecisionGuidanceModelRealtionDto(core));
        });

        return result;
    }

    @Override
    public <T extends CoreData> List<DecisionGuidanceModelRelatedGuidanceModelsDto> getRelatedGuidanceModels(String titlePartial) {
        Assert.notNull(titlePartial);

        List<DecisionGuidanceModelRelatedGuidanceModelsDto> result = new ArrayList<>();

        coreDataRepository.findDGMByTitle(titlePartial, DecisionGuidanceModel.class).forEach(node -> {
            result.add(new DecisionGuidanceModelRelatedGuidanceModelsDto(node));
        });

        return result;
    }
}