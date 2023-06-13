package entities;

import java.time.LocalDate;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "evento")
@Getter
@Setter
@NoArgsConstructor

public class Evento {
	
	@Id
	@GeneratedValue
	
	private long id;
	private String titolo;
	private LocalDate dataEvento;
	private String descrizione;
	private TipoEvento tipoEvento;
	private int numeroMassimoPartecipanti;
	
	@OneToMany(mappedBy = "evento", cascade = CascadeType.ALL)
	private Set<Partecipazione> partecipazioni;
	
	@ManyToOne(cascade = CascadeType.MERGE)
	private Location location;
	
	public Evento(String titolo, LocalDate dataEvento, String descrizione, TipoEvento tipo, int numeroMassimoPartecipanti, Location location, Set<Partecipazione> partecipazioni) {
		super();
		   this.setTitolo(titolo);
		    this.setDataEvento(dataEvento);
		    this.setDescrizione(descrizione);
		    this.setTipoEvento(tipo);
		    this.setNumeroMassimoPartecipanti(numeroMassimoPartecipanti);
		    this.setLocation(location);
		    this.setPartecipazioni(partecipazioni);
	}
	
	@Override
	public String toString() {
	    return "Evento [ID: " + id + ", Titolo: " + titolo + ", Data Evento: " + dataEvento + ", Descrizione: " + descrizione
	            + ", Tipo di Evento: " + tipoEvento + ", Numero massimo di Partecipanti: " + numeroMassimoPartecipanti + "]";
	}

	
	
}
