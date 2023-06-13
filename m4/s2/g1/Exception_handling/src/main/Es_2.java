package main;

import java.util.Scanner;

public class Es_2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		consumptions();
	}
	
	public static void consumptions() {
		
		Scanner input = new Scanner(System.in);

		System.out.println("Inserisci il numero di km percorsi: ");
		int userKm = input.nextInt();
					
		System.out.println("Ora i litri consumati");
		int userLts = input.nextInt();

				try {
					System.out.println("I km per litro percorsi sono: " + (userKm/userLts) + "km/litro");
				} catch (Exception e) {
					System.out.println("Errore: " + e.getMessage());
				};


		input.close();
	}
}
