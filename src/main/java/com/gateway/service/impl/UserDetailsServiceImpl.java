package com.gateway.service.impl;

import com.gateway.service.UserDetailsService;
import com.gateway.domain.UserDetails;
import com.gateway.repository.UserDetailsRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Service Implementation for managing {@link UserDetails}.
 */
@Service
@Transactional
public class UserDetailsServiceImpl implements UserDetailsService {

    private final Logger log = LoggerFactory.getLogger(UserDetailsServiceImpl.class);

    private final UserDetailsRepository userDetailsRepository;

    public UserDetailsServiceImpl(UserDetailsRepository userDetailsRepository) {
        this.userDetailsRepository = userDetailsRepository;
    }

    /**
     * Save a userDetails.
     *
     * @param userDetails the entity to save.
     * @return the persisted entity.
     */
    @Override
    public UserDetails save(UserDetails userDetails) {
        log.debug("Request to save UserDetails : {}", userDetails);
        return userDetailsRepository.save(userDetails);
    }

    /**
     * Get all the userDetails.
     *
     * @return the list of entities.
     */
    @Override
    @Transactional(readOnly = true)
    public List<UserDetails> findAll() {
        log.debug("Request to get all UserDetails");
        return userDetailsRepository.findAll();
    }

    /**
     * Get one userDetails by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<UserDetails> findOne(Long id) {
        log.debug("Request to get UserDetails : {}", id);
        return userDetailsRepository.findById(id);
    }

    /**
     * Delete the userDetails by id.
     *
     * @param id the id of the entity.
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete UserDetails : {}", id);
        userDetailsRepository.deleteById(id);
    }
}
