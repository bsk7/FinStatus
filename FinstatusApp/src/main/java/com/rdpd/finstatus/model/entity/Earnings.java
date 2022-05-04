package com.rdpd.finstatus.model.entity;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Entity
@Table(name="earnings", schema ="rdpd")
public class Earnings {
	

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="earning_id")
	private int earningId;
	
	@Column(name = "earning_type")
	private String earningType;
	
	@Column(name = "earning_source")
	private String earningSource;
	
	@Column(name = "earning_year")
	private int earningYear;
	
	@Column(name = "earning_month")
	private String earningMonth;
	
	@Column(name = "earning_amount")
	private double earningAmount;
	
	@Column(name = "earning_date")
	private Date earningDate;
	
	@Column(name = "earner_id")
	private int earnerId;
	
	public int getEarningId() {
		return earningId;
	}

	public void setEarningId(int earningId) {
		this.earningId = earningId;
	}

	public String getEarningType() {
		return earningType;
	}

	public void setEarningType(String earningType) {
		this.earningType = earningType;
	}

	public String getEarningSource() {
		return earningSource;
	}

	public void setEarningSource(String earningSource) {
		this.earningSource = earningSource;
	}

	public int getEarningYear() {
		return earningYear;
	}

	public void setEarningYear(int earningYear) {
		this.earningYear = earningYear;
	}

	public String getEarningMonth() {
		return earningMonth;
	}

	public void setEarningMonth(String earningMonth) {
		this.earningMonth = earningMonth;
	}

	public double getEarningAmount() {
		return earningAmount;
	}

	public void setEarningAmount(double earningAmount) {
		this.earningAmount = earningAmount;
	}

	public Date getEarningDate() {
		return earningDate;
	}

	public void setEarningDate(Date earningDate) {
		this.earningDate = earningDate;
	}

	public int getEarnerId() {
		return earnerId;
	}

	public void setEarnerId(int earnerId) {
		this.earnerId = earnerId;
	}


}
