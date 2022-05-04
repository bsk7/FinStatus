package com.rdpd.finstatus.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rdpd.finstatus.model.entity.Earnings;

@Repository
public interface EarningsRepository extends JpaRepository<Earnings,Integer>{

}
