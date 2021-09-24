package jm.pp.rescuer313.service;

import jm.pp.rescuer313.ExeptionHandler.NoUserWithSuchIdException;
import jm.pp.rescuer313.ExeptionHandler.NoUserWithSuchLogin;
import jm.pp.rescuer313.dao.UserRepository;
import jm.pp.rescuer313.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Comparator;
import java.util.LinkedHashSet;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@Transactional
public class UserDetailsServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final SecurityService securityService;

    @Autowired
    public UserDetailsServiceImpl(UserRepository userRepository, SecurityService securityService) {
        this.userRepository = userRepository;
        this.securityService = securityService;
    }

    @Override
    public User findByUsername(String username) {

        try {
            return userRepository.findByUsername(username);
        } catch (Exception e) {
            throw new NoUserWithSuchLogin("There is not user with such login");
        }
    }

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        return userRepository.findByUsername(s);
    }

    @Override
    public void addNewUser(User user) {
        user.setPassword(securityService.getCrypt(user.getPassword()));
        userRepository.save(user);
    }

    @Override
    public Set<User> findAllUsers() {

        return userRepository.findAll().stream()
                .sorted(Comparator.comparing(User::getId))
                .collect(Collectors.toCollection(LinkedHashSet::new));
    }

    @Override
    public void updateUser(User user) {
        user.setPassword(securityService.getCrypt(user.getPassword()));
        userRepository.save(user);
    }

    @Override
    public User findUserById(int id) {
        return userRepository.findById(id).orElseThrow(() -> new NoUserWithSuchIdException("User with such id does not exist"));
    }

    @Override
    public void deleteUserById(int id) {
        userRepository.deleteById(id);
    }
}
