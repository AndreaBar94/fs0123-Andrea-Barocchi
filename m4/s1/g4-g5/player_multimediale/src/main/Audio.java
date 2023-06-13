package main;

public class Audio extends ElementoMultimediale implements Volume{
	
	private int volume = 3;
	private int durata;
	
	
	
	public Audio(String title, int durata) {
		super(title);
		this.durata = durata;
		
	}
	
	public int alzaVolume() {
		return volume++;
	}
	public int abbassaVolume() {
		return volume--;
	}


	@Override
	public void play() {
		for (int i = 0; i < durata; i++) {
			System.out.print(title);
            for (int j = 0; j < volume; j++) {
                System.out.print(" ! ");
            }
            System.out.println();
        }
	}


}
