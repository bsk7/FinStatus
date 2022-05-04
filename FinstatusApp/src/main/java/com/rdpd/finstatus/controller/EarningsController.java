package com.rdpd.finstatus.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rdpd.finstatus.model.entity.Earnings;
import com.rdpd.finstatus.service.EarningsService;

@CrossOrigin
@RestController
@RequestMapping("/api/v1")
public class EarningsController {
	
	@Autowired
	private EarningsService earningsService;
	
	//Get all Earnings Details
	@GetMapping("/earnings")
	public List<Earnings> getAllEarnings(){
		List<Earnings> earns = earningsService.findAllEarnings();
		return earns;
	}
	
	//Create Earning Details
	@PostMapping("/earnings")
	public Earnings createEarning(@RequestBody Earnings earning) {
		return earningsService.saveEarning(earning);
	}

}
