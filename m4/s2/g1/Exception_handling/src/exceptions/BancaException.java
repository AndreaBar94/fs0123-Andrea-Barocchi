package exceptions;

public class BancaException extends Exception {
	
	private String messaggio;
	
	public BancaException(String message) {
		super(message);
		this.messaggio = message;
	}
	
	@Override
	public String toString() {
		
		return this.messaggio;
	}
}
