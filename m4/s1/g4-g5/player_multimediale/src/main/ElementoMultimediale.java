package main;

public abstract class ElementoMultimediale {
	protected String title;
	
	public ElementoMultimediale(String title) {
		this.title = title;
	}

	public abstract void play();

}
