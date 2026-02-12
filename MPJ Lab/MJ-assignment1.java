import java.util.ArrayList;


class User {
    String userId;
    String contentType;
    double preferenceScore;
    ArrayList<String> history = new ArrayList<>();

    User(String userId, String contentType, double preferenceScore) {
        this.userId = userId;
        this.contentType = contentType;
        this.preferenceScore = preferenceScore;
    }

    void addHistory(String content) {
        history.add(content);
    }

    // Method Overloading
    void recommend() {
        System.out.println("Recommended " + contentType);
    }

    void recommend(String lastWatched) {
        System.out.println("Because you watched " + lastWatched);
        System.out.println("Recommended similar " + contentType);
    }
}

class VideoPlatform extends User {

    VideoPlatform(String userId, double preferenceScore) {
        super(userId, "Videos", preferenceScore);
    }

    // Method Overriding
    @Override
    void recommend() {
        System.out.println("Video Platform Recommendation:");
        System.out.println("Recommended: Action Movies");
    }
}

public class Main {   // <-- IMPORTANT: main class name

    public static void main(String[] args) {

        VideoPlatform user1 = new VideoPlatform("U101", 8.5);

        user1.addHistory("Action Movie");

        user1.recommend();               // Overriding
        System.out.println();
        user1.recommend("Action Movie"); // Overloading
    }
}