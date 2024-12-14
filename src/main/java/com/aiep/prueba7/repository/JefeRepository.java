package com.aiep.prueba7.repository;

import com.aiep.prueba7.domain.Jefe;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the Jefe entity.
 */
@SuppressWarnings("unused")
@Repository
public interface JefeRepository extends JpaRepository<Jefe, Long> {}
