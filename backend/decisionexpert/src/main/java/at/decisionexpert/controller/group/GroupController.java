package at.decisionexpert.controller.group;

import at.decisionexpert.neo4jentity.dto.group.GroupChangeRequestDto;
import at.decisionexpert.neo4jentity.dto.group.GroupDto;
import at.decisionexpert.neo4jentity.dto.group.GroupRelationDto;

/**
 * Created by stefanhaselboeck on 17.11.16.
 */
public interface GroupController {

    GroupDto createGroup(GroupChangeRequestDto groupValues);

    GroupDto updateGroup(Long idGroup, GroupChangeRequestDto groupValues);

    void deleteGroup(Long idGroup);

    GroupDto getGroup(Long idGroup);

    GroupRelationDto createGroupRelation(Long idGroup, Long idUser);

    void deleteGroupRelationAttribute(Long idGroupRelation);
}
