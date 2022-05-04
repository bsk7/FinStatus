package com.rdpd.finstatus.model.entity;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="expenses", schema ="rdpd")
public class Expenses {
	

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="expense_id")
	private int expenseId;
	
	@Column(name = "expense_year")
	private int expenseYear;
	
	@Column(name = "expense_month")
	private String expenseMonth;
	
	@Column(name = "expense_type")
	private String expenseType;
	
	@Column(name = "expense_amount")
	private double expenseAmount;
	
	@Column(name = "expense_date")
	private Date expenseDate;
	
	@Column(name = "expenser_id")
	private int expenserId;

	public int getExpenseId() {
		return expenseId;
	}

	public void setExpenseId(int expenseId) {
		this.expenseId = expenseId;
	}

	public int getExpenseYear() {
		return expenseYear;
	}

	public void setExpenseYear(int expenseYear) {
		this.expenseYear = expenseYear;
	}

	public String getExpenseMonth() {
		return expenseMonth;
	}

	public void setExpenseMonth(String expenseMonth) {
		this.expenseMonth = expenseMonth;
	}

	public String getExpenseType() {
		return expenseType;
	}

	public void setExpenseType(String expenseType) {
		this.expenseType = expenseType;
	}

	public double getExpenseAmount() {
		return expenseAmount;
	}

	public void setExpenseAmount(double expenseAmount) {
		this.expenseAmount = expenseAmount;
	}

	public Date getExpenseDate() {
		return expenseDate;
	}

	public void setExpenseDate(Date expenseDate) {
		this.expenseDate = expenseDate;
	}

	public int getExpenserId() {
		return expenserId;
	}

	public void setExpenserId(int expenserId) {
		this.expenserId = expenserId;
	}

}
