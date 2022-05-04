package com.rdpd.finstatus.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rdpd.finstatus.model.entity.Earnings;
import com.rdpd.finstatus.model.repository.EarningsRepository;

@Service
public class EarningsService {
	
	@Autowired
	private EarningsRepository earningsRepository;

	public List<Earnings> findAllEarnings() {
		// TODO Auto-generated method stub
		return earningsRepository.findAll();
	}

	public Earnings saveEarning(Earnings earning) {
		// TODO Auto-generated method stub
		return earningsRepository.save(earning);
	}

}
