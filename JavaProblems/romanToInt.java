import java.util.*;
public class romanToInt {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine();

        int ans = romanToValue(s);
        System.out.println(ans);
    }
    public static int romanToValue(String s) {
        HashMap<Character, Integer> map = new HashMap<>();
        map.put('I',1);
        map.put('V',5);
        map.put('X',10);
        map.put('L',50);
        map.put('C',100);
        map.put('D',500);
        map.put('M',1000);

        int ans = 0;
        int prev = 0;

        for(int i=s.length()-1; i>=0; i--) {
            int curr = map.get(s.charAt(i));
            if(curr < prev) {
                ans -= curr;
            } else {
                ans += curr;
            }
            prev = curr;
        }
        return ans;
    }
}
