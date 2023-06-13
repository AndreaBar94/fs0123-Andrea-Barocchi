package Es_1;

import Es_1.Main1;

public class DoubleThread extends Thread {
	
	private final String symbol;
	
	public DoubleThread(String symbol) {
		this.symbol = symbol;
	}
	
	
	@Override
	public void run() {
		for (int i = 0; i <= 10; i++) {
			Main1.logger.info(symbol + i);
			
			try {
				Thread.sleep(1000);
			} catch (InterruptedException e) {

				Main1.logger.error(getName());
			}
		}
	}
}
