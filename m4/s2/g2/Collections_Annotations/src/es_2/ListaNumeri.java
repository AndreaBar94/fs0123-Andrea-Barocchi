package es_2;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Random;

public class ListaNumeri {

    public static void main(String[] args) {
        int n = 10;
        List<Integer> lista1 = generaLista(n);
        System.out.println("Lista generata:");
        stampaLista(lista1);

        List<Integer> lista2 = concatenaInverso(lista1);
        System.out.println("\nLista concatenata:");
        stampaLista(lista2);

        System.out.println("\nStampa elementi in posizioni pari:");
        stampaPariDispari(lista2, true);

        System.out.println("\nStampa elementi in posizioni dispari:");
        stampaPariDispari(lista2, false);
    }

    public static List<Integer> generaLista(int n) {
        List<Integer> lista = new ArrayList<Integer>();
        Random rand = new Random();
        for (int i = 0; i < n; i++) {
            lista.add(rand.nextInt(101));
        }
        Collections.sort(lista);
        return lista;
    }

    public static List<Integer> concatenaInverso(List<Integer> lista) {
        List<Integer> listaInversa = new ArrayList<Integer>(lista);
        Collections.reverse(listaInversa);
        lista.addAll(listaInversa);
        return lista;
    }

    public static void stampaPariDispari(List<Integer> lista, boolean pari) {
    	
        for (int i = 0; i < lista.size(); i++) {
        	
            if (pari && (i+1) % 2 == 0) {
                System.out.print(lista.get(i) + " ");
            } else if(!pari && (i+1) % 2 != 0) {
                System.out.print(lista.get(i) + " ");
            }
        }
        System.out.println();
    }

    public static void stampaLista(List<Integer> lista) {
        for (int i = 0; i < lista.size(); i++) {
            System.out.print(lista.get(i) + " ");
        }
        System.out.println();
    }

}
