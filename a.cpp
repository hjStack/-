
#include <iostream>
#include <string>

using namespace std;

class Book{
    string title;
    int pages=0;
    int price=0;

public:
    Book(string title = "", int price = 0, int pages = 0) {
        this->title = title; this->price = price;  this->pages = pages;
    }

    void show() {
        cout << title << ' ' << price << "원 " << pages << " 페이지" << endl;
    }

    string getTitle() { 
        return title; 
    }

    Book& operator +=(int price1);
    Book& operator -=(int price2);
};

Book& Book::operator-=(int price1){
    price -= price1;
    return *this;
}

Book& Book::operator+=(int price2){
    price += price2;
    return *this;
}

int main(){

    string title;
    int price, pages;

    cout << "첫 번째 책의 정보를 입력하세요:" << endl;
    cout << "제목: ";
    getline(cin, title);

    cout << "가격: ";
    cin >> price;

    cout << "페이지 수: ";
    cin >> pages;

    cin.ignore(); // 입력 버퍼 비우기

    Book a(title, price, pages);

    cout << "두 번째 책의 정보를 입력하세요:" << endl;
    cout << "제목: ";
    getline(cin, title);

    cout << "가격: ";
    cin >> price;

    cout << "페이지 수: ";
    cin >> pages;

    Book b(title, price, pages);

    a += 500; // 책 a의 가격 500원 증가
    b -= 500; // 책 b의 가격 500원 감소

    cout << endl << "책 정보:" << endl;

    a.show();
    b.show();


    return 0;
}