import java.util.*;
public class panagram {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine();
        if(s.length() < 26) {
            System.out.println("false");
        }
        HashSet<Character> set = new HashSet<>();
        for(char c : s.toLowerCase().toCharArray()) {
            if(c >= 'a' && c <= 'z') {
                set.add(c);
            }
        }
        if(set.size() == 26) {
            System.out.println("true");
        }
    }
}
