package at.archkb.server.repository.node;

import java.util.Collection;

import at.archkb.server.neo4jentity.node.CoreData;

public interface ArchProfileAttributeRepository {

	/**
	 * Loading ArchProfileAttributes according to a partial title
	 * 
	 * @param partialTitle The partial title for filtering
	 * @param attributeClass the node class on which the query should be executed
	 * @return a list of ArchProfileAttributes filtered by the partialTitle, performed on the node Class
	 */
	<T extends CoreData> Collection<T> findAllByTitle(String partialTitle, Class<T> attributeClass);

	/**
	 * Loading a specific ArchProfile Attribute (e.g. Quality Attribute)
	 * @param id Which AP Attribute
	 * @param attributeClass What Class (Type)
	 * @param <T> Type identifier
     * @return A single CoreData given by the id
     */
	<T extends CoreData> T findById(Long id, Class<T> attributeClass);

	/**
	 * Loading a specific ArchProfile Attribute (e.g. Quality Attribute)
	 * @param archProfileAttribute What Attribute to save
	 * @param <T> Type identifier
	 * @return A single CoreData given by the id
	 */
	<T extends CoreData> T save(T archProfileAttribute);
}
