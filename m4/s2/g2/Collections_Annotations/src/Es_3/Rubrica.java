package Es_3;

import java.util.HashMap;
import java.util.Map;

public class Rubrica {
	
	private Map<String, String> rubrica;
	
	public Rubrica() {
		rubrica = new HashMap<String, String>();
	}
	
	public void inserisciContatto(String nome, String telefono) {
		rubrica.put(nome, telefono);
	}
	
	public void eliminaContatto(String nome) {
		rubrica.remove(nome);
	}
	
	public String ricercaContattoTel(String telefono) {
		for(String nome : rubrica.keySet()) {
			if(rubrica.get(nome).equals(telefono)) {
				return nome;
			}
		}
		return null;
	}
	
	public String ricercaContattoNom(String nome) {
		return rubrica.get(nome);
	}
	
	public void stampaRubrica() {
		System.out.println("I tuoi contatti sono: ");
		for(String nome : rubrica.keySet()) {
			String telefono = rubrica.get(nome);
			System.out.println(nome + ": " + telefono);
		}
	}
}
