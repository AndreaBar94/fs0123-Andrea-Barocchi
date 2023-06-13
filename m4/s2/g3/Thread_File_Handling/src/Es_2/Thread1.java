package Es_2;


import Es_1.Main1;

public class Thread1 extends Thread {
	
	private final int[] values;
	private int result;
	
	public Thread1(int[] values) {
		this.values = values;
	}
	
	@Override
	public void run() {
		for (int i = 0; i < values.length; i++) {
			result += values[i];
		}
	}
	
	public int getResult() {
		return result;
	}
}
