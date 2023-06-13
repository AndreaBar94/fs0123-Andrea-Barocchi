package es_1;

import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class ParoleDoppie {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Inserisci il numero di parole: ");
        int n = input.nextInt();

        Set<String> parole = new HashSet<String>();
        Set<String> duplicati = new HashSet<String>();

        for (int i = 0; i < n; i++) {
            System.out.print("Inserisci la parola " + (i+1) + ": ");
            String parola = input.next();
            if (!parole.add(parola)) {
                duplicati.add(parola);
            }
        }

        System.out.println("\nLe parole duplicate sono: ");
        for (String parola : duplicati) {
            System.out.println(parola);
        }

        int numParoleDistinte = parole.size();
        System.out.println("\nIl numero di parole distinte è: " + numParoleDistinte);

        System.out.println("\nLe parole distinte sono: ");
        for (String parola : parole) {
            System.out.println(parola);
        }
    }

}
