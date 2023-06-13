package Es_1;

import Es_1.DoubleThread;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Main1 {
	
	public static Logger logger = LoggerFactory.getLogger(Main1.class);

	
	public static void main(String[] args) {
		
		DoubleThread t1 = new DoubleThread("*");
		DoubleThread t2 = new DoubleThread("#");
		
		t1.start();
		t2.start();
		
	}

}
