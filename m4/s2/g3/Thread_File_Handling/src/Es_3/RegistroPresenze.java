package Es_3;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;

public class RegistroPresenze {
	
	private static File file = new File("info.txt");
	
	public static void main(String[] args) {
		try {
			saveOnDisk("Mario Rossi@5");
			saveOnDisk("Giorgio Bianchi@7");
			saveOnDisk("Gianni Verdi@7");
			System.out.println("REGISTRO PRESENZE");
			System.out.println("Ecco il contenuto:");
			System.out.println(readFileFromDisk());
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	public static void saveOnDisk(String string) throws IOException {
		FileUtils.writeStringToFile(file, string + System.lineSeparator(), "UTF-8", true);
	}

	public static String readFileFromDisk() throws IOException {
		if (file.exists()) {
			String content = FileUtils.readFileToString(file, "UTF-8");
			return content;
		} else {
			System.out.println("FILE NON TROVATO!");
			return "";
		}
	}
}
