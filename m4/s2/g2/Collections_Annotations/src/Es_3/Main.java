package Es_3;

public class Main {

	public static void main(String[] args) {
		

		Rubrica rubrica = new Rubrica();
		
		rubrica.inserisciContatto("Mario", "123456789");
		rubrica.inserisciContatto("Andrea", "987654321");
		rubrica.inserisciContatto("Matteo", "872364342");
		rubrica.inserisciContatto("Emanuele", "134534534534");
		rubrica.inserisciContatto("Marianna", "134523452345");
		rubrica.inserisciContatto("Michela", "123453412543456");
		
		//rubrica.eliminaContatto("Mario");
		//rubrica.eliminaContatto("Andrea");
		//rubrica.eliminaContatto("Marianna");
		
		String nome = "Matteo";
		String numeroX = rubrica.ricercaContattoNom(nome);
		
		if(numeroX != null) {
			System.out.println("Il numero di " + nome + " è: " + numeroX);
		}else {
			System.out.println("Nessun numero trovato");
		}
		
		String numero = "987654321";
		String nomeX = rubrica.ricercaContattoTel(numero);
		
		if(nomeX != null) {
			System.out.println("Il numero " + numero + " appartiene a: " + nomeX);
		}else {
			System.out.println("Questo numero non appare in nessun contatto nella tua rubrica");
		}
		
		
		
		rubrica.stampaRubrica();
		
	}

}
