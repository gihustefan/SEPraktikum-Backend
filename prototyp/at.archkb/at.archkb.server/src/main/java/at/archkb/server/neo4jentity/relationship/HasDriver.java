package at.archkb.server.neo4jentity.relationship;

import org.neo4j.ogm.annotation.RelationshipEntity;

import at.archkb.server.neo4jentity.node.ArchProfile;
import at.archkb.server.neo4jentity.node.Driver;

@RelationshipEntity(type = "HAS_DRIVER")
public class HasDriver extends APAttributeRelationship<Driver> {

	public HasDriver(ArchProfile startNode, Driver endNode, String description, String definition, int ordering) {
		super(startNode, endNode, description, definition, ordering);
		// TODO Auto-generated constructor stub
	}

	public HasDriver(ArchProfile startNode, Driver endNode) {
		super(startNode, endNode);
		// TODO Auto-generated constructor stub
	}

	public HasDriver() {
		super();
		// TODO Auto-generated constructor stub
	}
}