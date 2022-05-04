package com.rdpd.finstatus.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rdpd.finstatus.model.entity.Expenses;
import com.rdpd.finstatus.model.repository.ExpensesRepository;

@Service
public class ExpensesService {
	
	@Autowired
	private ExpensesRepository expensesRepository;

	public List<Expenses> findAllExpenses() {
		// TODO Auto-generated method stub
		return expensesRepository.findAll();
	}

}
