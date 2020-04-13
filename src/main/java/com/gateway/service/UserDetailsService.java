package com.gateway.service;

import com.gateway.domain.UserDetails;

import java.util.List;
import java.util.Optional;

/**
 * Service Interface for managing {@link UserDetails}.
 */
public interface UserDetailsService {

    /**
     * Save a userDetails.
     *
     * @param userDetails the entity to save.
     * @return the persisted entity.
     */
    UserDetails save(UserDetails userDetails);

    /**
     * Get all the userDetails.
     *
     * @return the list of entities.
     */
    List<UserDetails> findAll();

    /**
     * Get the "id" userDetails.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<UserDetails> findOne(Long id);

    /**
     * Delete the "id" userDetails.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);
}
