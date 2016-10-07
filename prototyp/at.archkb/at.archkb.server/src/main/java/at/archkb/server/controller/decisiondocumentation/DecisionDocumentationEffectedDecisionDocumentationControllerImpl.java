package at.archkb.server.controller.decisiondocumentation;

import at.archkb.server.neo4jentity.dto.decisiondocumentation.DecisionDocumentationModelEffectedDocumentationModelDto;
import at.archkb.server.service.decisiondocumentation.DecisionDocumentationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Created by stefanhaselboeck on 06.10.16.
 */
@RestController
@RequestMapping("api/ddm/{idDecisionDocumentationModel}/effecteddecisiondocumentation")
@ResponseBody
public class DecisionDocumentationEffectedDecisionDocumentationControllerImpl implements DecisionDocumentationEffectedDecisionDocumentationController {

    @Autowired
    DecisionDocumentationService decisionDocumentationService;

    @Override
    @RequestMapping(method = RequestMethod.POST)
    public DecisionDocumentationModelEffectedDocumentationModelDto create(@PathVariable Long idDecisionDocumentationModel, @RequestBody DecisionDocumentationModelEffectedDocumentationModelDto effectedDecisionDocumentation) {
        return decisionDocumentationService.createDocumentationModelRelation(idDecisionDocumentationModel, effectedDecisionDocumentation);
    }

    @Override
    @RequestMapping(value = "/{idDecisionDocumentationEffectedDecisionDocumentation}",method = RequestMethod.PATCH)
    public DecisionDocumentationModelEffectedDocumentationModelDto updateAttributes(@PathVariable Long idDecisionDocumentationModel, @PathVariable Long idDecisionDocumentationEffectedDecisionDocumentation, @RequestBody DecisionDocumentationModelEffectedDocumentationModelDto newValues) {
        return decisionDocumentationService.updateExistingDocumentationModelRelationAttribute(idDecisionDocumentationModel, idDecisionDocumentationEffectedDecisionDocumentation, newValues);
    }

    @Override
    @RequestMapping(value = "/{idDecisionDocumentationEffectedDecisionDocumentation}",method = RequestMethod.DELETE)
    public void delete(@PathVariable Long idDecisionDocumentationModel, @PathVariable Long idDecisionDocumentationEffectedDecisionDocumentation) {
        decisionDocumentationService.deleteDocumentationModelRelationAttribute(idDecisionDocumentationModel, idDecisionDocumentationEffectedDecisionDocumentation);
    }
}
