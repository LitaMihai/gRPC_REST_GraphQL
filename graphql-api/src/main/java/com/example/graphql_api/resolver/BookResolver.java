package com.example.graphql_api.resolver;

import com.example.graphql_api.model.Book;
import com.example.graphql_api.repository.BookRepository;
import graphql.kickstart.tools.GraphQLQueryResolver;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@Controller
@CrossOrigin(origins = "http://localhost")
public class BookResolver implements GraphQLQueryResolver {

    private final BookRepository bookRepository;

    public BookResolver(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @QueryMapping
    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }
}

