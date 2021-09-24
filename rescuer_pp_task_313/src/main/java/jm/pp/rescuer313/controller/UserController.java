package jm.pp.rescuer313.controller;

import jm.pp.rescuer313.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.security.Principal;


@Controller
@RequestMapping
public class UserController {
//    @GetMapping
//    public String hello() {
//        return "index";
//    }
private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping("/login")
    public String login(){
        return "/login";
    }


    @GetMapping("/")
    public String getIndex() {
        return "pages/users";
    }


//    @GetMapping("/{username}")
//    public String show(@PathVariable("username") String username, Model model, Principal principal) {
//        model.addAttribute("userP", userService.findByUsername(principal.getName()));
//        model.addAttribute("user", userService.findByUsername(username));
//        return "pages/user/index";
//    }

}
