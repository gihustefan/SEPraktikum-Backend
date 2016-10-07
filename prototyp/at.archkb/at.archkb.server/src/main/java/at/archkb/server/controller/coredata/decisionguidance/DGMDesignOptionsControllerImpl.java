package at.archkb.server.controller.coredata.decisionguidance;

import at.archkb.server.neo4jentity.dto.decisionguidance.DecisionGuidanceModelRealtionDto;
import at.archkb.server.neo4jentity.node.DesignOption;
import at.archkb.server.service.coredata.DGMCoreDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by stefanhaselboeck on 18.08.16.
 */
@RestController
@RequestMapping("api/designoptions")
@ResponseBody
public class DGMDesignOptionsControllerImpl implements DGMCoreDateController{
    @Autowired
    DGMCoreDataService dgmCoreDataService;

    @Override
    @RequestMapping(method = RequestMethod.GET)
    public List<DecisionGuidanceModelRealtionDto> getCoreData(String titlePartial) {
        return dgmCoreDataService.getCoreData(titlePartial, DesignOption.class);
    }
}
