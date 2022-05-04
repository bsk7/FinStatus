package com.rdpd.finstatus.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rdpd.finstatus.model.entity.Expenses;

@Repository
public interface ExpensesRepository extends JpaRepository<Expenses, Integer>{

}
