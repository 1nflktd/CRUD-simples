package main

import (
	"log"
	"net/http"
)

func main() {

	http.Handle("/js/", http.StripPrefix("/js/", http.FileServer(http.Dir("js"))))
	http.Handle("/css/", http.StripPrefix("/css/", http.FileServer(http.Dir("css"))))
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "templates/index.html")
	})

	log.Printf("Running server on 8080 port..")

	log.Fatal(http.ListenAndServe(":8080", nil))
}
