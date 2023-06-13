package Es_2;
import java.util.Random;

public class Main2 {

	public static void main(String[] args) throws InterruptedException {
		
		int[] myArr = new int[3000];
		Random rand = new Random();
		for(int i = 0; i < myArr.length; i++) {
			myArr[i] = rand.nextInt(100);
		}
		
		int[][] partitions = new int[3][1000];
	        for (int i = 0; i < partitions.length; i++) {
	            for (int j = 0; j < partitions[i].length; j++) {
	                partitions[i][j] = myArr[i * 1000 + j];
	            }
	    }
	        
	    Thread1[] threads = new Thread1[3];
	        for (int i = 0; i < threads.length; i++) {
	            threads[i] = new Thread1(partitions[i]);
	            threads[i].start();
	    }
	        
	    int[] results = new int[3];
	    for (int i = 0; i < threads.length; i++) {
	            threads[i].join();
	            results[i] = threads[i].getResult();
	            System.out.println("Parziali: " + (results[i]));
	    }
	        
	    int sum = 0;
	    for (int i = 0; i < results.length; i++) {
	            sum += results[i];
	    }
	    
	    
	    System.out.println("Somma totale: " + sum);
	}

}
