package com.example.grpcapi.service;

import com.example.grpcapi.model.User;
import com.example.grpcapi.repository.UserRepository;
import com.example.grpcapi.proto.*;
import io.grpc.stub.StreamObserver;
import net.devh.boot.grpc.server.service.GrpcService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.stream.Collectors;

@GrpcService
public class UserServiceImpl extends UserServiceGrpc.UserServiceImplBase {

    @Autowired
    private UserRepository userRepository;

    @Override
    public void createUser(UserRequest request, StreamObserver<UserResponse> responseObserver) {
        User user = new User(null, request.getName(), request.getEmail());
        user = userRepository.save(user);

        UserResponse response = UserResponse.newBuilder()
                .setId(user.getId())
                .setName(user.getName())
                .setEmail(user.getEmail())
                .build();

        responseObserver.onNext(response);
        responseObserver.onCompleted();
    }

    @Override
    public void getUserById(UserId request, StreamObserver<UserResponse> responseObserver) {
        userRepository.findById(request.getId()).ifPresent(user -> {
            UserResponse response = UserResponse.newBuilder()
                    .setId(user.getId())
                    .setName(user.getName())
                    .setEmail(user.getEmail())
                    .build();
            responseObserver.onNext(response);
        });

        responseObserver.onCompleted();
    }

    @Override
    public void getUsers(Empty request, StreamObserver<UserList> responseObserver) {
        List<UserResponse> users = userRepository.findAll().stream()
                .map(user -> UserResponse.newBuilder()
                        .setId(user.getId())
                        .setName(user.getName())
                        .setEmail(user.getEmail())
                        .build())
                .collect(Collectors.toList());

        UserList response = UserList.newBuilder().addAllUsers(users).build();
        responseObserver.onNext(response);
        responseObserver.onCompleted();
    }
}
