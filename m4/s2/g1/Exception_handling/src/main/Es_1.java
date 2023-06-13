package main;

import java.util.Arrays;
import java.util.Scanner;

public class Es_1 {

	public static void main(String[] args) {

		casualNumbers();
	}
	
	
	public static void casualNumbers() {
		
		int[] numArr = new int[5];
		
		for(int i = 0; i<= numArr.length -1; i++) {
			int casualNum = (int) Math.floor(Math.random()*10);
			numArr[i] = casualNum;
		}
		System.out.println(Arrays.toString(numArr));
		
		Scanner input = new Scanner(System.in);
		int userNum;
			
			
			do {
				System.out.println("Inserisci un numero da 1 a 10, poi un numero da 0 a 4; in alternativa premi 0 per chiudere:");
				userNum = input.nextInt();
				
				if(userNum != 0 && userNum > 0 && userNum <= 10) {
				try {
					
					System.out.println("Ora un numero da 0 a 4");
					int userPosition = input.nextInt();
					numArr[userPosition] = userNum;
					System.out.println(Arrays.toString(numArr));
					
				} catch (Exception e) {
					System.out.println("Errore " + e);
				}
				
				}else if(userNum == 0) {
					
					System.out.println("Un bacio ai pupi e 'na carezza ar cane!");
				}
				else {
				
					System.out.println("Deve essere un numero compreso tra 1 e 10, oppure 0 per chiudere!");
				
				}
				
			}while(userNum != 0);
			
		input.close();

	}

}
