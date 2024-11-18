# 課題点：my_dfa.show_diagram()でこのDFAの画像が生成されるはずなのに生成されない。

from automata.fa.dfa import DFA

my_dfa = DFA(
    states={'q0', 'q1', 'q2'},
    input_symbols={'0', '1'},
    transitions={
        'q0': {'0': 'q0', '1': 'q1'},
        'q1': {'0': 'q0', '1': 'q2'},
        'q2': {'0': 'q2', '1': 'q1'}
    },
    initial_state='q0',
    final_states={'q1'}
)

my_dfa.show_diagram()
print(my_dfa.read_input('111')) 
print(my_dfa.read_input('101'))
print(my_dfa.accepts_input('111'))
print(my_dfa.accepts_input('0'))



# from automata.fa.dfa import DFA

# DFA which matches all binary strings ending in an odd number of '1's

# my_dfa = DFA(
#     states={'q0', 'q1', 'q2'},
#     input_symbols={'0', '1'},
#     transitions={
#         'q0': {'0': 'q0', '1': 'q1'},
#         'q1': {'0': 'q0', '1': 'q2'},
#         'q2': {'0': 'q2', '1': 'q1'}
#     },
#     initial_state='q0',
#     final_states={'q1'}
# )

# my_dfa.show_diagram()