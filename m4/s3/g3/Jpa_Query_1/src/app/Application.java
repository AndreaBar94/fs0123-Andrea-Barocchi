package app;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import dao.EventoDAO;
import dao.LocationDAO;
import dao.PersonaDAO;
import entities.Evento;
import entities.Location;
import entities.Partecipazione;
import entities.Persona;
import entities.Sesso;
import entities.Stato;
import entities.TipoEvento;
import utils.JpaUtil;

public class Application {
	
	private static Logger logger = LoggerFactory.getLogger(Application.class);
	private static EntityManagerFactory emf = JpaUtil.getEntityManagerFactory();

	public static void main(String[] args) {
		
		EntityManager em = emf.createEntityManager();
		EventoDAO sd = new EventoDAO(em);
		PersonaDAO pDAO = new PersonaDAO(em);
		LocationDAO lDAO = new LocationDAO(em);
		
		Persona aldo = new Persona("Aldo", "Baglio", "aldobaglio@email.it", LocalDate.now(), Sesso.MASCHIO, new HashSet<>());
		Persona maria = new Persona("Maria", "Rossi", "mariarossi@email.it", LocalDate.now(), Sesso.FEMMINA, new HashSet<>());
		
		Location loc1 = new Location("Giardino Degli Aranci", "Roma");
		
		Evento cena1 = new Evento("Cena", LocalDate.now(), "Cena di beneficenza", TipoEvento.PRIVATO, 30, loc1, new HashSet<>());
		Evento cena2 = new Evento("Pranzo", LocalDate.now(), "Pranzo di beneficenza", TipoEvento.PUBBLICO, 50, loc1, new HashSet<>());

		pDAO.save(maria);
		pDAO.save(aldo);
		lDAO.save(loc1);
		
		Partecipazione p1 = new Partecipazione(aldo, cena1, Stato.CONFERMATA);
		Partecipazione p2 = new Partecipazione(aldo, cena2, Stato.CONFERMATA);
		
		
		Set<Partecipazione> lp1 = new HashSet<>();
//	
		cena1.getPartecipazioni().add(p1);
		cena2.getPartecipazioni().add(p2);
		
		p1.setEvento(cena1);
		p2.setEvento(cena2);
		p1.setPersona(maria);
		p2.setPersona(aldo);


		
//		logger.info("GUARDA QUI: "+ p1.getEvento());
//		sd.delete(47);
//		sd.delete(48);
		em.getTransaction().begin();
		em.persist(cena1);
		em.persist(cena2);
		em.persist(p1);
		em.persist(p1);
		em.getTransaction().commit();

		sd.refresh(4);
		em.close();

		emf.close();
	}

}
