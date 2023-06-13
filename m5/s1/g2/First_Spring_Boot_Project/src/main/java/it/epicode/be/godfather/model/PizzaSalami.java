package it.epicode.be.godfather.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PizzaSalami extends PizzaBase {

	public PizzaSalami() {
		super("Pizza Salami (tomato, cheese, salami)", 5.99, 1160d);
	}

}
