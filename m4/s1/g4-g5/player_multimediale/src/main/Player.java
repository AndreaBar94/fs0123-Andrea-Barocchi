package main;
import java.util.Scanner;

public class Player {

	public static void main(String[] args) {
		
		Scanner input = new Scanner(System.in);
		
		System.out.println("Inserisci nome e durata di una canzone");
		Audio canzone1 = new Audio(input.nextLine(),input.nextInt());
		input.nextLine();
		
		System.out.println("Inserisci nome e durata di un film");
		Video video1 = new Video(input.nextLine(),input.nextInt());
		input.nextLine();
		
		System.out.println("Inserisci titolo e luminosità di una immagine");
		Immagine img1 = new Immagine(input.nextLine(), input.nextInt());
		input.nextLine();
		
		System.out.println("Manca poco, manca un film e la sua durata");
		Video video2 = new Video(input.nextLine(), input.nextInt());
		input.nextLine();
		
		System.out.println("Stavolta è l'ultima, inserisci titolo canzone e durata!");
		Audio canzone2 = new Audio(input.nextLine(), input.nextInt());
		input.nextLine();
		
		Object [] playerMemory = {canzone1, video1, img1, video2, canzone2};
		
		int selectedMedia = -1;
		
		while (selectedMedia != 0) {
		    System.out.println("Premi da 1 a 5 per fare play, 0 per chiudere.");
		    selectedMedia = input.nextInt();

			switch(selectedMedia) {
				case 1:
					((Audio) playerMemory[0]).play();
					break;
					
				case 2:
					((Audio) playerMemory[1]).play();
					break;
				
				case 3:
					((Immagine) playerMemory[2]).show();
					break;
					
				case 4:
					((Audio) playerMemory[3]).play();
					break;
					
				case 5: 
					((Audio) playerMemory[4]).play();
					break;
				
				case 0:
					System.out.println("Ciao ciao!");
					break;
					
				default:
					System.out.println("Trovo ripugnante la tua assenza di fede nella Forza.");
			};
		}
		input.close();

	}
	
}
