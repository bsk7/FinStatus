package com.rdpd.finstatus.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rdpd.finstatus.model.entity.Expenses;
import com.rdpd.finstatus.service.ExpensesService;

@CrossOrigin
@RestController
@RequestMapping("/api/v1")
public class ExpensesController {
	
	@Autowired
	private ExpensesService expensesService;
	
	//Get all Earnings Details
	@GetMapping("/expenses")
	public List<Expenses> getAllEarnings(){
		List<Expenses> expenses = expensesService.findAllExpenses();		
		return expenses;
	}

}
