package com.be.cgql.config;



//@Configuration
//@EnableWebSecurity
//@EnableMethodSecurity(securedEnabled = true)
public class SecurityConfig  {
//
//    @Bean
//    public InMemoryUserDetailsManager users() {
//
//        UserDetails user = User.builder()
//                .username("user")
//                .password("pwd")
//                .roles("USER")
//                .build();
//
//        UserDetails admin = User.builder()
//                .username("admin")
//                .password("pwd")
//                .roles("USER", "ADMIN")
//                .build();
//
//        return new InMemoryUserDetailsManager(user, admin);
//    }
//
//    @Bean
//    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//        return http
//                .csrf(csrf -> csrf.disable())
//                .authorizeRequests(auth->auth
////                        .mvcMatchers("/graphiql").permitAll()
////                        .mvcMatchers("/graphql").permitAll()
//                        .anyRequest().authenticated()
//                )
//                .sessionManagement(session -> session
//                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
//                )
//                .httpBasic(Customizer.withDefaults())
//                .build();
//    }

}
