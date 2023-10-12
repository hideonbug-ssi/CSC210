/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package prime;

import java.util.Calendar;
import java.util.GregorianCalendar;

/**
 *
 * @author User
 */
public class Prime {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        System.out.println("Brute Force Start time: " + currentTime());
        primeList(300000);
        System.out.println("Finish time: " + currentTime());
        System.out.println("Sieve of Eratosthenes Start time: " + currentTime());
//        System.out.println(seiveOFEratosthenes(300000));
        seiveOFEratosthenes(300000);
        System.out.println("Finish time: " + currentTime());
    }
    
    public static String seiveOFEratosthenes(int n){
        String result = "";
        int[] a = new int[n+1];
        for (int i = 2; i < n+1; i++) {
            a[i] = i; // a = [2,3,4,5,6,...,n]
        }
        for (int p = 2; p < Math.sqrt(n); p++) {
            if(a[p] != 0){ // p is a prime
                int j = p*p;
                while(j <= n){
                    a[j] = 0;  //sieve
                    j += p;
                }
            }
        }
        for(int i =2; i < n+1; i++){
            if(a[i] != 0){
                result += a[i]+", ";
            }
        }
        return result;
    }
    
    public static String currentTime(){
        Calendar now = new GregorianCalendar();
        int hour = now.get(Calendar.HOUR);
        int minute = now.get(Calendar.MINUTE);
        int second = now.get(Calendar.SECOND);
        int millisecond = now.get(Calendar.MILLISECOND);
        int ampm = now.get(Calendar.AM_PM);
        return hour + (ampm>0?"PM":"AM") + ":" + minute + ":" + second + ":" + millisecond;
    }
    
    public static String primeList(int n){
        //brute force
        String result = "";
        for (int i = 2; i <= n; i++) {
            int j;
            for (j = 2; j < i; j++) {
                if (i%j == 0){ //i is divisible by j?
                    break; //not a prime
                }
            }
            if (j==i){
                result += j + ", ";
            }
        }
        result = result.substring(0, result.length() - 2);
        return result;
    }
}
