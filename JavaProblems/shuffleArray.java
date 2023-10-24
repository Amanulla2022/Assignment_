import java.util.*;
public class shuffleArray {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for(int i=0; i<n; i++) {
            arr[i] = sc.nextInt();
        }

        shuffleMyArray(arr);

        for(int i : arr) {
            System.out.println(i+" ");
        }
    }
    public static void shuffleMyArray(int[] array) {
        int n = array.length;
        Random randomValue = new Random();

        for(int i=n-1; i>0; i--) {
            int j = randomValue.nextInt(i+1);

            int temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}