package main;

public class Video extends ElementoMultimediale implements Luminosità, Volume{

	private int luminosità = 3;
	private int volume = 3;
	private int durata;
	
	public Video(String title, int durata) {
		super(title);
		this.durata = durata;
	}

	@Override
	public void play() {
		for (int i = 0; i < durata; i++) {
			System.out.print(title);
            for (int j = 0; j < volume; j++) {
                System.out.print(" ! ");
            }for(int z = 0; z < luminosità; z++) {
                	System.out.print(" * ");
                }
            System.out.println();
        }
		
	}


	public int alzaLuminosità() {
		return luminosità++;
	}


	public int abbassaLuminosità() {
		return luminosità--;
	}

	
	public int alzaVolume() {
		return volume++;
	}

	
	public int abbassaVolume() {
		return volume--;
	}


}

	
